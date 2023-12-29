type Student = {
    imie: string;
    nazwisko: string;
    numerIndeksu: string;
    zajecia: string[];
    oceny: number[] | [];
    studiaSkonczone: boolean;
};

type Nauczyciel = {
    imie: string;
    nazwisko: string;
    przedmiot: string;
    egzaminy: unknown[];
    funkcjaPrzeprowadzEgzamin: () => void;
};

type ns = (Student | Nauczyciel)[];

type ImionaNazwiska = Pick<Student | Nauczyciel, 'imie' | 'nazwisko'>;


function sumaLiczb(arg: boolean, ...args: (number | string)[]): number | string {
    let suma: number = 0;

    args.forEach((arg) => {
        if (typeof arg === 'string') {
            suma += parseFloat(arg);
        } else {
            suma += arg;
        }
    });

    return arg ? suma.toString() : suma;
}

type StudentGrade = [number, number]; 

const studentsGradesArray: StudentGrade[] = [
    [1, 4.5],
    [2, 3.0],
    [3, 5.0],
];

type Person = {
    type: 'student';
    takeExam: () => void;
} | {
    type: 'teacher';
    prepareExam: () => void;
}

const exam = (person: Person) => {
    if (person.type === 'student') {
        person.takeExam();
    } else {
        person.prepareExam();
    }
}


const message = (t: unknown) => {
    if(typeof t === 'string') {
        return `message: ${t}`;
    }else if(typeof t === 'number') {
        return t;
    }else{
        return new Error('Invalid type');
    }
}

type res = ReturnType<typeof message>;