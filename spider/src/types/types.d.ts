// declare student's info, contains grades
declare interface StudentInfo {
    name: string,
    avatar: string,
    repo_url: string,
    grades: any,
    maxgrades: any,
}

// declare config of the file
interface ResultObject {
    available: any;
    students: Array<StudentInfo>;
    questions: Array<string>;
    latestUpdatedAt: number
}