import * as fs from 'fs';
import { Data } from './24hCycle';


export function getWeekMonData(): Data {
   const data = fs.readFileSync("./dataJSON/weekMonthData.json", "utf-8");
    return JSON.parse(data);
    
}

getWeekMonData()
