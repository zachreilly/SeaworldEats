#!/usr/bin/env python3
import pandas as pd

def read_excel_menu():
    try:
        # Read the Excel file
        excel_file = "attached_assets/Book (1)_1755120055538.xlsx"
        
        # Try to read all sheets
        xl = pd.ExcelFile(excel_file)
        print("Available sheets:", xl.sheet_names)
        
        # Read each sheet and display the data
        for sheet_name in xl.sheet_names:
            print(f"\n=== {sheet_name} ===")
            df = pd.read_excel(excel_file, sheet_name=sheet_name, header=None)
            
            # Remove completely empty rows and columns
            df = df.dropna(how='all').dropna(axis=1, how='all')
            
            print("Clean data:")
            print(df.to_string())
            
            # Try to identify menu items and prices
            print("\nLooking for menu items and prices:")
            for index, row in df.iterrows():
                row_text = " | ".join([str(cell) for cell in row if pd.notna(cell)])
                if row_text.strip():
                    print(f"Row {index}: {row_text}")
                
    except Exception as e:
        print(f"Error reading file: {e}")

if __name__ == "__main__":
    read_excel_menu()