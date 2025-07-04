use hashcash::Token;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate_stamp(seed: &str, bits: u32) -> String {
    let stamp = Token::new(String::from(seed), bits);
    return stamp.to_string();
}
