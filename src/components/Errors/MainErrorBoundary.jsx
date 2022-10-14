import React from 'react';
import { Link } from 'react-router-dom';

export default class MainErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
//        logErrorToMyService(error, errorInfo);

    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <section className="no-page layout-pt-lg layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-50 justify-between items-center">
                        <div className="col-lg-6">
                            <div className="no-page__img">
                                <img src="/img/404/1.svg" alt="error" />
                                </div>
                            </div>

                        <div className="col-xl-5 col-lg-6">
                            <div className="no-page__content">
                                <h1 className="no-page__main text-dark-1">
                                    50<span className="text-purple-1">0</span>
                                </h1>
                                <h2 className="text-35 lh-12 mt-5">Oops! Something happened</h2>
                                <div className="mt-10">It appears the pages you are trying to access crashed<br/> don't sorry we are looking into it.</div>
                                <Link to='/' className="button -md -purple-1 text-white mt-20">Go Back To Homepage</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>;
        }

        return this.props.children;
    }
}