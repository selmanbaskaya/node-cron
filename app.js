import { schedule } from 'node-cron'

// 1. Entry: Second when the process will be started [0-60]
// 2. Entry: Minute when the process will be started [0-60]
// 3. Entry: Hour when the process will be started [0-23]
// 4. Entry: Day of the month when the process will be started [1-28/29/30/31]
// 5. Entry: Month of the year when the process will be started [1-12]
// 6. Entry: Weekday when the process will be started [0-6] [0 is Sunday]

schedule('* * * * * *', () => console.log('running a task every second'));

// If you don't want to use seconds, use the entries between the 2nd and 5th entry.
schedule('* * * * *', () => console.log('running a task every minute'));

// If you don't want to use seconds, use the entries between the 2nd and 5th entry.
schedule('30 17 * * 5', () => console.log('running a task every Friday at 5:30 PM.'));
