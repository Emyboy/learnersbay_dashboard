import React from 'react'

type Props = {
    pageHeading?: string;
    pageSubHeading?: string;
};

export function PageHeading({ pageHeading, pageSubHeading}: Props) {
  return (
      <div className="row pb-50 mb-10 mt-4">
          <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">{pageHeading}</h1>
              <div className="mt-10">{pageSubHeading}</div>
          </div>
      </div>
  );
}