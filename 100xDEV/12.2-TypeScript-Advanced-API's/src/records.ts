type company = {
    name: string;
    job: string;
}

type Companies = Record<string, company>;

const companies: Companies = {
    '1': {
        name: 'John',
        job: 'Developer'
    },
    '2': {
        name: 'Jane',
        job: 'Designer'
    }
}