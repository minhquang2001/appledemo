import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

function ItemLoading({ cards }) {
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            
                <div className="col wide l-3 m-4 c-6" key={i}>
                        <Skeleton  height={300} style={{marginBottom: '8px'}}/>
                </div>
            
        ));
}

export default ItemLoading;
