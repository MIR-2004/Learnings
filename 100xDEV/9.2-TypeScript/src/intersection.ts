type Employee = {
    name: string;
    startDate: Date;
}

interface Manager {
    name : string;
    department: string;
}

type ManagerEmployee = Employee & Manager; // intersection type

const t: ManagerEmployee = {
    name: "Mir Ali",
    startDate: new Date(),
    department: "Engineering",
}