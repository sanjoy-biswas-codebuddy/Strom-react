import React from 'react';

interface ListProps {
    items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul className="list-disc pl-4 mb-5">
            {items.map((item, index) => (
                <li key={index} className="text-white text-base font-light mb-3 opacity-80">{item}</li>
            ))}
        </ul>
    );
};

export default List;