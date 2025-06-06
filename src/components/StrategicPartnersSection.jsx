import awsLogo from '../assets/Images/aws-partner.svg';
import mongodbLogo from '../assets/Images/mongodb-partner.svg';
import googleCloudLogo from '../assets/Images/google-cloud-partner.svg';
import cloudinaryLogo from '../assets/Images/cloudinary-partner.svg';

export default function StrategicPartnersSection() {
  const logos = [
    { name: "AWS", src: awsLogo },
    { name: "MongoDB", src: mongodbLogo },
    { name: "Google Cloud", src: googleCloudLogo },
    { name: "Cloudinary", src: cloudinaryLogo },
  ];

  return (
    <section className="bg-[#1C1C1C] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <h2 className="text-white text-4xl font-medium max-w-md">
          Strategic Partnerships To Unlock Greater Business Value
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mt-8 sm:mt-0">
          {logos.map((partner) => (
            <img
              key={partner.name}
              src={partner.src}
              alt={partner.name}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
