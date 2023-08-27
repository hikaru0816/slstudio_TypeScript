class Member {
    public name: string;
    private birthday: Date;

    constructor(name: string, birthday: Date) {
        this.name = name;
        this.birthday = birthday;
    }

    getAge(): number {
        const today = new Date();
        const currentYearBirthday = new Date(today.getFullYear(), this.birthday.getMonth(), this.birthday.getDate());
        let age = today.getFullYear() - this.birthday.getFullYear();
        if (today < currentYearBirthday) {
            age--;
        }
        return age;
    }

    show(): void {
        const age: number = this.getAge();
        console.log("name: " + this.name + "\nage: " + age);
    }
}
const member = new Member("Taro", new Date("1990-01-13"));
member.show();

const member2 = new Member("Jiro", new Date("1993-04-26"));
member2.show();

const member3 = new Member("Saburo", new Date("1995-12-19"));
member3.show();
