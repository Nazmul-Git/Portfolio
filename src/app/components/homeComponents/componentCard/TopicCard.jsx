import Link from 'next/link'
import React from 'react'

export default function TopicCard({ resource }) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <Link href={resource.href} className="text-green-500 hover:text-green-700">
                Access Resource →
            </Link>
        </div>
    )
}
