
import React from 'react'
import TopicCard from './componentCard/TopicCard';

export default function InterviewTopics() {
    // Data for Interview Preparation Resources
    const interviewResources = [
        {
            title: 'Crack the Coding Interview',
            description: 'A must-have resource for practicing common coding problems and learning the ins and outs of interview questions.',
            href: '#',
        },
        {
            title: 'Interviewing.io Practice',
            description: 'Practice mock technical interviews with real engineers from top tech companies and get feedback.',
            href: '#',
        },
        {
            title: 'LeetCode Problem Sets',
            description: 'Prepare for coding interviews with a collection of interview-focused questions that cover algorithms and data structures.',
            href: '#',
        },
    ];

    return (
        <div className="bg-white shadow-xl rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">Interview Preparation</h2>
            <p className="text-gray-700 mb-4">Prepare for your next software engineering interview with these essential tips and resources:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {interviewResources.map((resource, index) => (
                    <TopicCard key={index} resource={resource} />
                ))}
            </div>
        </div>
    )
}
