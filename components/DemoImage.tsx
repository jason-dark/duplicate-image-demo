import Image from 'next/image';

export const DemoImage = () => {
  return (
    <Image
      src='https://www.fastly.com/cimages/6pk8mg3yh2ee/4zLuDTDqRq5H2Nuj8Ch0jB/d51cd0d20e0881043bec5c84151f1f4f/hero-laptop_1.png'
      alt='picture of a laptop dashboard'
      width={800}
      height={450}
    />
  );
};
