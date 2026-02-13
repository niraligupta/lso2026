import { ExternalLink } from 'lucide-react';

const organizers = [
  { name: 'Nezamuddin', department: 'Civil Engineering Department', image: '/images/coreTeam/nezam.jpg', profile: 'https://web.iitd.ac.in/~nezam/' },
  { name: 'Pramesh Kumar', department: 'Civil Engineering Department', image: '/images/speakers/Vishnu_Narayanan.jpg', profile: 'https://www.ieor.iitb.ac.in/~vishnu' },
  { name: 'Prashant Palkar', department: 'Civil Engineering Department', image: '/images/speakers/Avinash_Bhardwaj.jpg', profile: 'https://www.ieor.iitb.ac.in/files/faculty/abhardwaj/' },
  { name: 'Varun Ramamohan', department: 'Civil Engineering Department', image: '/images/speakers/Narayan_Rangaraj.jpg', profile: 'https://www.ieor.iitb.ac.in/~narayan' },
  { name: 'Prasanna R', department: 'Civil Engineering Department', image: '/images/speakers/Debanjan_Gangopadhyay.png', profile: 'https://www.ieor.iitb.ac.in/students/debanjangangopadhyay' },
  { name: 'Vikas Vikarm Singh', department: 'Civil Engineering Department', image: '/images/speakers/Simran_Lakhani.jpg', profile: 'https://www.ieor.iitb.ac.in/node/2948' },
  { name: 'Amber Srivastava', department: 'Civil Engineering Department', image: '/images/speakers/Debanjan_Gangopadhyay.png', profile: 'https://www.ieor.iitb.ac.in/students/debanjangangopadhyay' },
  { name: 'Ramachandra Rao Kalaga', department: 'Civil Engineering Department', image: '/images/speakers/Debanjan_Gangopadhyay.png', profile: 'https://www.ieor.iitb.ac.in/students/debanjangangopadhyay' },

];

const CoreTeam = () => {
  return (
    <section id="coreteam" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Core Team</h2>
          <p className="section-subtitle">
            Meet the team behind LSO Summer School 2026.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {organizers.map((organizer) => (
            <div key={organizer.name} className="speaker-card">
              <img
                src={organizer.image}
                alt={organizer.name}
                className="speaker-image"
              />
              <a
                href={organizer.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {organizer.name}
                <ExternalLink className="h-3 w-3" />
              </a>
              <p className="text-sm text-muted-foreground mt-1">{organizer.department}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
