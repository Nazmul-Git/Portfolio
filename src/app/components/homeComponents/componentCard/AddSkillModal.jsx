'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FiX, FiUpload, FiLink, FiTag, FiChevronDown } from 'react-icons/fi';

const AddSkillModal = ({ onClose, onSave, isOpen, isLoading, categories = [] }) => {
    const [newSkill, setNewSkill] = useState({
        name: '',
        logo: '',
        link: '',
        category: categories.length > 0 ? categories[0] : 'other'
    });
    const [logoPreview, setLogoPreview] = useState(null);
    const [logoFile, setLogoFile] = useState(null);
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSkill(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogoFile(file);
            // Simple client-side preview
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogoPreview(event.target.result);
                setNewSkill(prev => ({ ...prev, logo: event.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await onSave({
                ...newSkill,
                logoFile: logoFile
            });
            // Reset form after successful save
            setNewSkill({ name: '', logo: '', link: '', category: categories[0] || 'other' });
            setLogoPreview(null);
            setLogoFile(null);
            onClose();
        } catch (error) {
            console.error('Error saving skill:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Add New Skill</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                        disabled={isLoading}
                    >
                        <FiX size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2 flex items-center">
                            <FiTag className="mr-2" /> Skill Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={newSkill.name}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 bg-gray-700 rounded text-white ${errors.name ? 'border border-red-500' : ''}`}
                            placeholder="e.g. React, Node.js"
                            disabled={isLoading}
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Category</label>
                        <div className="relative">
                            <select
                                name="category"
                                value={newSkill.category}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-700 rounded text-white appearance-none pr-8"
                                disabled={isLoading || categories.length === 0}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                                {categories.length === 0 && (
                                    <option value="other">Other</option>
                                )}
                            </select>
                            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2 flex items-center">
                            <FiUpload className="mr-2" /> Logo
                        </label>
                        <div className="flex flex-col">
                            <label className="cursor-pointer inline-block">
                                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                                    {logoPreview ? (
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src={logoPreview}
                                                alt="Preview"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <FiUpload size={24} className="text-gray-400" />
                                    )}
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    className="hidden"
                                    disabled={isLoading}
                                />
                            </label>
                            <p className="text-gray-400 text-sm mt-2">Click to upload logo</p>
                            {errors.logo && <p className="text-red-400 text-sm mt-1">{errors.logo}</p>}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2 flex items-center">
                            <FiLink className="mr-2" /> Documentation Link
                        </label>
                        <input
                            type="url"
                            name="link"
                            value={newSkill.link}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 bg-gray-700 rounded text-white ${errors.link ? 'border border-red-500' : ''}`}
                            placeholder="https://..."
                            disabled={isLoading}
                        />
                        {errors.link && <p className="text-red-400 text-sm mt-1">{errors.link}</p>}
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded transition-colors"
                            disabled={isLoading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded transition-colors flex items-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Saving...
                                </>
                            ) : 'Save Skill'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSkillModal;