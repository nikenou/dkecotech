export default function CurveBar({
    className,
  }: {
    className: string;
  }) {
    return (
        <div 
            className={className} 
            style={{
                position: 'absolute',
                width: '120%',
                height: '20%',
                left: '-10%',
                borderRadius: '0 0 50% 50%' 
            }}
        >
        </div>
    );
}
