import React from 'react';

function Features() {
  return (
    <>
      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-12">
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p className="text-gray-600">Description of feature 1.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p className="text-gray-600 ">Description of feature 2.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p className="text-gray-600">Description of feature 3.</p>
        </div>
      </section>
    </>
  );
}

export default Features;
