import './Container.css';


// eslint-disable-next-line react/prop-types
const Container = ( { children, viewClass }) => (
        <section className={viewClass}>
                {children}
        </section>
);

export default Container;