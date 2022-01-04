import { useState } from 'react';
import Image from 'next/image';
import CSS from 'csstype';

const Dot = ({
  style,
  speed = 400,
}: {
  style: CSS.Properties | undefined;
  speed?: 100 | 400 | 600;
}): JSX.Element => (
  <div
    className={`absolute w-10 h-10 bg-orange-500 rounded-full transition-all opacity-30 duration-${speed}`}
    style={{ top: '50%', left: '50%', ...style }}
  />
);

type TeamMemberProps = {
  name: string;
  role: string;
  photo: string;
};

const TeamMember = ({ name, role, photo }: TeamMemberProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center">
      <div
        className="mb-4 bg-alt hover:bg-orange-100 relative transition-all duration-700"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Dot
          style={isHovered ? { left: '10%', top: '10%' } : undefined}
          speed={100}
        />
        <Dot
          speed={100}
          style={
            isHovered
              ? { left: '80%', top: '20%', transform: 'scale(0.4)' }
              : undefined
          }
        />
        <Dot
          style={isHovered ? { left: '5%', top: '60%' } : undefined}
          speed={600}
        />
        <Image
          className={`absolute z-0 transition-all ${
            !isHovered && 'black-and-white'
          }`}
          src={photo}
          alt="Picture of the author"
          width={1094}
          height={1642}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>

      <h1 className="font-bold text-2xl">{name}</h1>
      <h2>{role}</h2>
    </div>
  );
};

export default TeamMember;
