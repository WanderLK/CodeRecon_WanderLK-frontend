export default function WhileCard({ children, className }: ElementProps) {
    return (
        <div className={`bg-white rounded-lg py-4 px-6 my-1 ${className ? className : ''}`}>
            {children}
        </div>
    );
}
