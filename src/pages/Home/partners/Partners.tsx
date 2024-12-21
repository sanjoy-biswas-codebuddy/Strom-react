import React from 'react';
import SlickSlider from './SlickSlider';
import Button from '../../../component/shared/Button';
import TextSection from '../../../component/TextSection';

const Partners: React.FC = () => {
    const buttonConfigs = [
        { color: 'primary' as const, label: 'Jetzt Partner werden' },
    ];

    const textSectionProps = {
        heading2: 'Mach Schluss mit unfairen Bedingungen und werde Partner von Strom-Distributor.',
        paragraph: 'Als Vertriebler in der Energiebranche machen dir unregelmäßige Auszahlungen, niedrige Provisionssätze und das Storno-Konto das Leben schwer.',
        highlight: 'Bei uns bekommst du die volle Provision wöchentlich ausbezahlt – ganz ohne Stornokonto!',

    };


    return <div className='px-4 py-10' id='partner'>
       <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-wrap justify-center items-center'>
            <div className='basis-full lg:basis-1/2 md:basis-1/1 text-center md:text-center lg:text-center'>
            <TextSection
                heading2={textSectionProps.heading2}
                paragraph={textSectionProps.paragraph}
                highlight={textSectionProps.highlight}
            />
            </div>
        </div>
       </div>
        <SlickSlider />
        <div className='max-w-screen-xl mx-auto justify-center items-center flex mt-10'>
        {buttonConfigs.map((btn, index) => (
            <Button key={index} color={btn.color}>
                {btn.label}
            </Button>
        ))}
        </div>
    </div>
};

export default Partners;