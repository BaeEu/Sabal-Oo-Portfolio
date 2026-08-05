export interface Skill {
    name: string;
    percentage: number;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}