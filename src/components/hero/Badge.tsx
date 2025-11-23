import { motion } from "framer-motion";

export default function Badge({
	                                      children,
	                                      delay = 0.2,
	                                      className = "",
	                                      icon: Icon,
                                      }: any) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay }}
			className={`inline-flex items-center px-4 py-2 border border-primary/80 text-primary/80 text-sm font-medium rounded-full mb-6 ${className}`}
		>
			{Icon && <Icon size={16} className="mr-2" />}
			{children}
		</motion.div>
	);
}
