
import { Project } from '@/types/project';
import { api } from './api';

export const projectsService = {
  async getAll(): Promise<Project[]> {
    try {
      const { data: projects, error } = await api.supabase
        .from('projects')
        .select(`
          *,
          project_images (
            url,
            type,
            "order"
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return projects.map(project => ({
        id: project.id,
        slug: project.slug,
        title: project.title,
        description: project.description,
        category: project.category,
        overview: project.overview,
        role: project.role,
        tools: project.tools,
        challenges: project.challenges,
        solutions: project.solutions,
        outcomes: project.outcomes,
        images: project.project_images
          .sort((a: any, b: any) => a.order - b.order)
          .map((img: any) => img.url),
        coverImage: `/lovable-uploads/${project.slug}-projectcard-img.png`,
        profileImage: project.project_images.find((img: any) => img.type === 'cover')?.url || ''
      }));
    } catch (error) {
      return api.handleError(error as Error);
    }
  }
};
