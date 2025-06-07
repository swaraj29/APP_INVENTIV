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
    <section className="bg-[#1C1C1C] py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium max-w-md leading-tight sm:leading-snug">
            Strategic Partnerships To Unlock Greater Business   <br />
            Value
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-6 sm:mt-8 lg:mt-0">
            {logos.map((partner) => (
              <img
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                className="h-10 sm:h-12 md:h-14 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}