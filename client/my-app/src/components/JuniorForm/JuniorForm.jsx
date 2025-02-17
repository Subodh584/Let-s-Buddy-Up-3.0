import React, { useState } from 'react';
import axios from 'axios';
import { Search, User, Star, Code } from 'lucide-react';

export default function SearchSeniorsForm() {
  const [formData, setFormData] = useState({
    requiredSkill1: '',
    requiredSkill2: '',
    requiredSkill3: '',
    minimumRating: 3
  });
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const seniorList = [["John Doe"],["Jane Smith"],["Bob Johnson"]];
  const handleSubmit = async (e) => {
    e.preventDefault();
    let i = 0;
    if (i < 2) {
      setResults(seniorList[i++]);
    } else {
      i = 0;
    }
    setLoading(true);
    setError('');
  
    try {
      console.log('Sending request with data:', formData);
      const response = await axios.post('http://localhost:8080/api/search', formData);
      console.log('Received response:', response.data);
      setResults(response.data);
  
      // Redirect to localhost:1000 after successful submission
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch seniors. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'minimumRating' ? Number(value) : value
    }));
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Find Senior Students</h1>
            <p className="text-gray-600">Search for seniors based on skills and rating</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Required Skill {num}
                  </label>
                  <div className="relative">
                    <Code className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name={`requiredSkill${num}`}
                      value={formData[`requiredSkill${num}`]}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`Enter skill ${num}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Rating (1-5)
              </label>
              <div className="relative">
                <Star className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="minimumRating"
                  value={formData.minimumRating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Search Seniors
                </>
              )}
            </button>
          </form>
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
        </div>
        
        {results.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <div className="space-y-4">
              {results}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}