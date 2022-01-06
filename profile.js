class Profile {
    constructor(
        name,
        age,
        schoolname,
        classyear,
        major,
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
        this.image=image;
    }
}
export default Profile;




