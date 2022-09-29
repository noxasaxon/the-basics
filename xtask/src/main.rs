use anyhow::{anyhow, bail, Result};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::str::FromStr;
use std::{
    env,
    fs::{self, read_to_string},
    io::BufRead,
};
use strum::EnumString;

type DynError = Box<dyn std::error::Error>;
fn main() {
    if let Err(e) = try_main() {
        eprintln!("{e}");
        std::process::exit(-1);
    }
}

const CMD_CONVERT_ALL: &str = "convert-all";

fn try_main() -> Result<(), DynError> {
    let task = env::args().nth(1);
    match task.as_deref() {
        Some(c) if c == CMD_CONVERT_ALL => convert_all_code_to_md(&["python"])?,
        _ => print_help(),
    }
    Ok(())
}

fn print_help() {
    eprintln!(
        "\nTasks:
{CMD_CONVERT_ALL}                 convert all code files to markdown docs
"
    )
}

#[derive(EnumString)]
#[strum(serialize_all = "lowercase")]
enum ConvertableFileExt {
    PY,
    // RS,
    // TS,
    // JS
    // GO,
}

fn convert_all_code_to_md(dir_names: &[&str]) -> Result<()> {
    for dir_name in dir_names {
        let dir_path = project_root().join(dir_name);
        convert_dir_code_to_md(dir_path).unwrap();
    }

    Ok(())
}

fn convert_dir_code_to_md(dir_path: PathBuf) -> Result<()> {
    for entry in fs::read_dir(dir_path).unwrap() {
        let entry = entry?;
        let file_type = entry.file_type().unwrap();

        let mut entry_path = entry.path();

        if file_type.is_dir() {
            convert_dir_code_to_md(entry_path).unwrap();
        } else {
            let file_ext = entry_path.extension().unwrap().to_str().unwrap();

            if let Ok(convertable_ext) = ConvertableFileExt::from_str(file_ext) {
                let file_bytes = fs::read(entry_path.clone()).unwrap();

                let md_string = match convertable_ext {
                    ConvertableFileExt::PY => convert_py_to_md(file_bytes),
                }
                .unwrap();

                entry_path.set_extension("md");
                fs::write(entry_path, md_string).expect("Unable to write file");
            }
        }
    }
    Ok(())
}

/// convert python file to mdx
/// A single comment means it should be markdown text
/// a double comment means its a code comment
// pub fn parse_from_python(py_file_bytes: Vec<u8>) -> Result<Vec<u8>> {
pub fn convert_py_to_md(py_file_bytes: Vec<u8>) -> Result<String> {
    const PYTHON_COMMENT_DELIMITER: &str = "#";
    const MD_CODE_BLOCK_OPEN_PY: &str = "```python";
    const MD_CODE_BLOCK_CLOSE: &str = "```";
    const MD_HEADING_2: &str = "## ";

    let mut md_file_content = Vec::default();

    for line_result in py_file_bytes.lines() {
        let raw_line = line_result.unwrap();
        if raw_line.starts_with(PYTHON_COMMENT_DELIMITER) {
            let (_, rest) = raw_line.split_once(PYTHON_COMMENT_DELIMITER).unwrap();
            writeln!(&mut md_file_content, "{}", rest).unwrap();
        } else if raw_line.is_empty() {
        } else {
            writeln!(&mut md_file_content, "{}", MD_CODE_BLOCK_OPEN_PY).unwrap();
            writeln!(&mut md_file_content, "{}", raw_line).unwrap();
            writeln!(&mut md_file_content, "{}", MD_CODE_BLOCK_CLOSE).unwrap();
        }
    }

    let md_str = String::from_utf8(md_file_content)
        .unwrap()
        .replace("```\n```python\n", "");

    Ok(md_str)
}

#[allow(dead_code)]
fn cargo() -> String {
    env::var("CARGO").unwrap_or_else(|_| "cargo".to_string())
}

pub fn project_root() -> PathBuf {
    Path::new(&env!("CARGO_MANIFEST_DIR"))
        .ancestors()
        .nth(1)
        .unwrap()
        .to_path_buf()
}

#[cfg(test)]
mod test {
    use crate::{convert_py_to_md, project_root};
    use std::{
        fs,
        path::{Path, PathBuf},
    };

    #[test]
    fn test_parse_from_python() {
        let raw_file = fs::read(project_root().join(PathBuf::from("python/01/01.py"))).unwrap();
        let test_file = convert_py_to_md(raw_file).unwrap();
        println!("{:?}", std::env::current_dir().unwrap());
        fs::write("test.md", test_file).expect("Unable to write file");
    }
}

// let current_dir = env::current_dir()?;
// println!(
//     "Entries modified in the last 24 hours in {:?}:",
//     current_dir
// );

// for entry in fs::read_dir(current_dir)? {
//     let entry = entry?;
//     let path = entry.path();

//     let metadata = fs::metadata(&path)?;
//     let last_modified = metadata.modified()?.elapsed()?.as_secs();

//     if last_modified < 24 * 3600 && metadata.is_file() {
//         println!(
//             "Last modified: {:?} seconds, is read only: {:?}, size: {:?} bytes, filename: {:?}",
//             last_modified,
//             metadata.permissions().readonly(),
//             metadata.len(),
//             path.file_name().ok_or("No filename")?
//         );
//     }
// }
