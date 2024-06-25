import React, { FC, ReactElement } from 'react';
import ComponentRenderer from './ComponentRenderer';

interface ComponentProps {
    type: string;
    props: any;
}

interface SectionProps {
    type: string;
    props: any;
    components?: ComponentProps[];
}

interface DynamicPageProps {
    data: SectionProps[];
}

const DynamicPage: FC<DynamicPageProps> = ({ data }): ReactElement => {
    return (
        <div>
            {data.map((section, index) => (
                <div
                    key={index}
                    className={`section ${section.type}`}
                    style={section.props}
                >
                    {section.components?.map((component, idx) => (
                        <div
                            key={idx}
                            className={`component ${component.type}`}
                        >
                            <ComponentRenderer
                                type={component.type}
                                props={component.props}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DynamicPage;