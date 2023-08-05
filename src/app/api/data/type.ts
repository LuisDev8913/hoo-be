import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  handle: z.string(),
  altId: z.string(),
  userType: z.number(),
  categoryId: z.string(),
  urlPath: z.string(),
  hasPhoto: z.boolean(),
  about: z.string(),
  createdUtc: z.string(),
  updatedUtc: z.string(),
  imageUpdatedUtc: z.string()
});

export type User = z.infer<typeof userSchema>;

const userSocialPlatformSchema = z.object({
  id: z.string(),
  altId: z.string(),
  userId: z.string(),
  socialPlatform: z.number(),
  handle: z.string(),
  link: z.string(),
  createdUtc: z.string()
});

export type UserSocialPlatform = z.infer<typeof userSocialPlatformSchema>;

const contentSchema = z.object({
  id: z.string(),
  altId: z.string(),
  title: z.string(),
  contentType: z.number(),
  mimeType: z.number(),
  categoryAltId: z.string(),
  link: z.string(),
  isDraft: z.boolean(),
  isDirectLinkEnabled: z.boolean(),
  isEmbedEnabled: z.boolean(),
  hasPhoto: z.boolean(),
  sortOrder: z.number(),
  isFeatured: z.boolean(),
  isDeleted: z.boolean(),
  isEditable: z.boolean(),
  socialPlatform: z.number(),
  userId: z.string(),
  createdUtc: z.string(),
  updatedUtc: z.string(),
  imageUpdatedUtc: z.string()
});

export type Content = z.infer<typeof contentSchema>;

const pageDataSchema = z.object({
  user: userSchema,
  userSocialPlatform: z.array(userSocialPlatformSchema),
  content: z.array(
    z.object({
      content: contentSchema,
      childCount: z.number(),
      imageCount: z.number(),
      videoCount: z.number(),
      contentSettings: z.object({})
    })
  )
});

export type PageData = z.infer<typeof pageDataSchema>;

export const AVAILABLE_SOCIAL_PLATFORMS = ['instagram', 'threads', 'tiktok', 'twitter'] as const;

export type SocialPlatform = (typeof AVAILABLE_SOCIAL_PLATFORMS)[number];

export const SOCIAL_PLATFORM_IDS_MAP = new Map([
  [0, 'instagram'],
  [59, 'threads'],
  [6, 'tiktok'],
  [7, 'twitter']
]) satisfies Map<number, SocialPlatform>;
