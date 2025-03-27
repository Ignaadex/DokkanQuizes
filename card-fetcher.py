import json
import sqlite3
from typing import Dict, List, Any
import os

def fetch_cards_data(db_path: str) -> Dict[str, List[Dict[str, Any]]]:
    """
    Fetches card data from the database according to specified criteria and 
    formats it as a JSON object.
    
    Args:
        db_path: Path to the SQLite database file
        
    Returns:
        A dictionary with a "cards" key containing a list of card objects
    """
    # Connect to the database
    conn = sqlite3.connect(db_path)
    # Enable column access by name
    conn.row_factory = sqlite3.Row
    
    cursor = conn.cursor()
    
    # Execute the query with the specified filters
    query = """
    SELECT 
        c.id, 
        c.name, 
        c.element, 
        c.rarity, 
        oag.lv_max AS lv_max, 
        ps.itemized_description 
    FROM cards c
    JOIN optimal_awakening_growths oag 
        ON oag.optimal_awakening_grow_type = c.optimal_awakening_grow_type 
        AND oag.step = (
            SELECT MAX(oag_inner.step) 
            FROM optimal_awakening_growths oag_inner 
            WHERE oag_inner.optimal_awakening_grow_type = c.optimal_awakening_grow_type
        )
    JOIN passive_skill_sets ps 
        ON ps.id = oag.passive_skill_set_id
    WHERE 
        (c.element BETWEEN 10 AND 14 OR c.element BETWEEN 20 AND 24)
        AND c.rarity >= 3
        AND oag.lv_max >= 120
        AND c.id % 10 = 1
        AND CAST(substr(c.id, 1, 1) AS INTEGER) NOT IN (2, 3, 5, 6, 7, 8, 9)
        AND c.optimal_awakening_grow_type IS NOT NULL;
    """
    
    cursor.execute(query)
    rows = cursor.fetchall()
    
    # Format the results as required
    cards = []
    for row in rows:
        card = {
            "id": row["id"],
            "name": row["name"],
            "element": row["element"],
            "rarity": row["rarity"],
            "lv_max": row["lv_max"],
            "itemized_description": row["itemized_description"]
        }
        cards.append(card)
    
    # Close the connection
    conn.close()
    
    # Return the formatted data
    return {"cards": cards}

def save_to_json(data: Dict[str, List[Dict[str, Any]]], output_path: str) -> None:
    """
    Saves the card data to a JSON file.
    
    Args:
        data: Dictionary containing the card data
        output_path: Path where the JSON file will be saved
    """
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def save_to_js(data: Dict[str, List[Dict[str, Any]]], output_path: str) -> None:
    """
    Saves the card data to a JavaScript file as an exportable constant.
    
    Args:
        data: Dictionary containing the card data
        output_path: Path where the JavaScript file will be saved
    """
    # Convert data to a formatted JSON string
    json_str = json.dumps(data, ensure_ascii=False, indent=2)
    
    # Create the JavaScript export string
    js_content = f"export const mockData = {json_str};\n"
    
    # Write to the file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
if __name__ == "__main__":
    # Example usage
    DB_PATH = "C:/Users/Usuario/Desktop/Ignacio/Dokkan/DokkanSQLiteDiffs/DokkanDatabaseDIFF-GB/gb.db"  # Change this to your database path
    JSON_OUTPUT_PATH = "mockData2.json"
    JS_OUTPUT_PATH = "mockData2.js"
    
    try:
        # Fetch the data
        cards_data = fetch_cards_data(DB_PATH)
        
        # Save to JSON file
        save_to_json(cards_data, JSON_OUTPUT_PATH)
        
        # Save to JavaScript file
        save_to_js(cards_data, JS_OUTPUT_PATH)
        
        # Print success message and preview
        print(f"Successfully saved {len(cards_data['cards'])} cards to {JSON_OUTPUT_PATH} and {JS_OUTPUT_PATH}")
        print("\nPreview of the first card:")
        if cards_data['cards']:
            print(json.dumps(cards_data['cards'][0], indent=2))
            
    except sqlite3.Error as e:
        print(f"Database error: {e}")
    except Exception as e:
        print(f"Error: {e}")