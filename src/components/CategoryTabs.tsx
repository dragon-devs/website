import {Boxes, Building2, Heart, Rocket} from "lucide-react";
import React from "react";

export const CategoryTabs = ({activeTab, router}: any) => {
    const tabs = [
        {id: "all", label: "All Work", icon: Boxes},
        {id: "client", label: "Client Projects", icon: Building2},
        {id: "products", label: "Our Products", icon: Rocket}
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
                    className={`chamfer-sm px-5 py-3 transition-colors duration-300 flex items-center gap-2.5
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                        activeTab === tab.id
                            ? "bg-primary/15 text-primary"
                            : "bg-foreground/[0.045] text-muted-foreground hover:bg-foreground/[0.08] hover:text-foreground"
                    }`}
                >
                    <tab.icon size={15} strokeWidth={2}/>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em]">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};
