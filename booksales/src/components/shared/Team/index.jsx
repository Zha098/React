export default function Team (){
    return (
        <>
            <div id="team" className="container py-5">
                <h2 className="text-center mb-5">Our Team</h2>
                <div className="row">
                {[
                    { name: "Fira", role: "Founder", img: "images/profile.png" },
                    { name: "John", role: "Manager", img: "images/man_13978834.png" },
                    { name: "Sarah", role: "Developer", img: "images/profile.png" },
                ].map((member, i) => (
                    <div className="col-md-4 text-center" key={i}>
                    <img src={member.img} className="rounded-circle mb-3" alt={member.name} width="150" height="150" />
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                    </div>
                ))}
                </div>
            </div>
        
        
        
        
        </>

    )
}