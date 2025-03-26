import * as dotenv from "dotenv";

export const config = dotenv.config();

export const organiztion: string = 'oscontent25';            // 组织
export const fullOrganization: string = '202499350-oscontent25-classroom-os25'; // classroom名称
export const assignment = 'oscomp-test';   // assignment
export const works = ['basic-glibc', 'libc-test-glibc', 'lua-glibc', 'busybox-glibc', 'iozone-glibc', 'basic-musl', 'libc-test-musl', 'lua-musl', 'busybox-musl', 'iozone-musl']; // assignment 的不同情况
export const AUTH_TOKEN = process.env['TOKEN'];
export const SESSION_TOKEN = process.env['SESSION_TOKEN'];

// JsonData store the grades and the other info.
export let JsonData: ResultObject = {
    available: {},
    // grades has the tree. grades --> studentGithubUsername --> workName --> grade
    students: [],
    // the list of questions
    questions: [],
    // latest update time
    latestUpdatedAt: Date.now()
}


// initialize the JsonData by works
for(let work of works) {
    JsonData['available'][work] = 0;
} 
