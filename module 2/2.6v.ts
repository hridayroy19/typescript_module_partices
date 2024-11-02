{
    //constraints in typescript


    const addCounterStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "next Level web Developmetn";
        return {
            ...student,
            course
        }
    }

    const student1 = addCounterStudent<{
        id: number;
        name: string;
        email: string
    }>

    const student2 = addCounterStudent<{
        id: number;
        name: string;
        email: string;
        watch: string
    }>


    //   but ami bole dite pari ekta student modhe jegula thake baddota mulok constrainst modhame



    //
}