import Link from 'next/link';

export const Navbar = () => {
  return (
    <header
      style={{
        borderBottom: '1px solid white',
        padding: '20px 0',
        marginBottom: '50px',
      }}
    >
      <Link href='/' style={{ marginRight: '24px' }}>
        Home
      </Link>
      <Link href='/demo-page'>Demo page</Link>
    </header>
  );
};
