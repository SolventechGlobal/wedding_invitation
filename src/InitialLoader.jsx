import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function InitialLoader() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(false), 2000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-amber-50 text-white z-50 flex items-center justify-center"
                    initial={{ y: 0 }}
                    animate={{ y: '100%' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: [0.9, 0, 0.1, 1], delay: 1 }}
                >
                    <img src="/loader.png" alt="Loading..." className="w-full object-contain"/>
                </motion.div>
            )}
        </AnimatePresence>
    )
}