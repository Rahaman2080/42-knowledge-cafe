import profile from '../../images/profile.png'
const Header = () => {
    return (
        <>
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='font-bold text-3xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
        </>
    );
};

export default Header;