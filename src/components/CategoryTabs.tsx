import {Boxes, Building2, Heart, Rocket} from "lucide-react";
import React from "react";

export const CategoryTabs = ({activeTab, router}: any) => {
    const tabs = [
        {id: "all", label: "All Work", icon: Boxes},
        {id: "client", label: "Client Projects", icon: Building2},
        {id: "products", label: "Our Products", icon: Rocket},
        {id: "opensource", label: "Open Source", icon: Heart}
    ];

    const updateCategory = (cat:any) => {
        router.push(`?category=${cat}`, {scroll: false});
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => updateCategory(tab.id)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                        activeTab === tab.id
                            ? "bg-primary/20 text-primary border-primary/40"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                >
                    <tab.icon size={18}/>
                    <span className="font-medium">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};
