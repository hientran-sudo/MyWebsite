class Profile {
    constructor(
        name,
        age,
        schoolname,
        classyear,
        major,
        graduate,
        image
    )
    {
        this.name=name;
        this.age=age;
        this.school={
            sn:schoolname,
            cy:classyear,
            m:major
        };
        this.graduate=graduate;
        this.image=image;
    }
}
export default Profile;




