use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LookupMap;
use near_sdk::{near_bindgen, log, PanicOnDefault};

#[near_bindgen]
#[derive(PanicOnDefault, BorshDeserialize, BorshSerialize)]
pub struct Contract {
    entries: LookupMap<String, u64>,
    count: usize,
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new() -> Self {
        Self {
            entries: LookupMap::new("".as_bytes()),
            count: 0usize
        }
    }
    
    pub fn get_entry(&self, company: String) -> u64 {
        self.entries.get(&company).unwrap()
    }

    pub fn add_entry(&mut self, company: String, co2_emissions: u64) {
        self.count += 1;
        self.entries.insert(&company, &co2_emissions);
        log!(
            r#"EVENT_JSON:{{
                "standard": "nep9999", 
                "version": "1.0.0", 
                "event": "add_is_triggered",
                "data": {{
                    "entry_id": {},
                    "company": {},
                    "co2_emissions": {},
                }}
            }}"#,
            self.count,
            company,
            co2_emissions
        );
    }
}