class Profile {
    constructor(
        name,
        age,
        schoolname,
        classyear,
        major,
        graduate,
        image,
        dateCreated
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
        this.dateCreated=dateCreated;
    }
    siteAge(){
        let now = new Date();
        let created = new Date(this.dateCreated);
        let eslasped = now - created;
        let daysSinceCreated = Math.floor(eslasped/(1000*3600*24));
        return daysSinceCreated;
    }
}
export default Profile;
