import os
import sys
import mysql.connector
import csv
import pandas as pd
import numpy as np
import json

import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pprint import pprint

def main():
    with open('mysqlconn.json') as f:
        connector = json.load(f)
    sqlstuff(connector)

###########################################################################
#mysql connection
def sqlstuff(connector):
    mydb = mysql.connector.connect(
        **connector) 

    print(mydb)

    mycursor = mydb.cursor()
    mycursor.execute("select * from jobs")
    for job in mycursor:
        print(job)
    mydb.close()

###########################################################################

#Method to process info from google sheets
def googleSheets():
  scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]

  creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)

  client = gspread.authorize(creds)

  sheet = client.open('Jobs').worksheet('2019')

  data = sheet.get_all_records()
if __name__ == "__main__":
    main()