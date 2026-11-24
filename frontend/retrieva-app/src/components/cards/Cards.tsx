
interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const Card = ({children, className=""}: CardProps) => (
      <div className={`opacity-65 drop-shadow-xl rounded-lg p-4 outline-2 outline-gray-300 py-8 px-4 ${className}`}>
    {children}
  </div>
);

export default Card;