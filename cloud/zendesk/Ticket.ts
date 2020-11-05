export type Ticket = {
    url: string,
    id: number | null,
    external_id: string | null,
    via: object | null,
    created_at: string | null,
    updated_at: string | null,
    type: string | null,
    subject: string | null,
    raw_subject: string | null,
    description: string | null,
    priority: string | null,
    status: string | null,
    recipient: string| null,
    requester_id: number,
    submitter_id: number | null,
    assignee_id: number| null,
    organization_id: number | null,
    group_id: number | null,
    collaborator_ids: [] | null,
    follower_ids: [] | null,
    email_cc_ids: [] | null,
    forum_topic_id: null | null,
    problem_id: number | null,
    has_incidents: boolean  | null,
    is_public: boolean  | null,
    due_at: string | null, // date in document
    tags: [] | null,
    custom_fields: [] | null,
    satisfaction_rating: object  | null,
    sharing_agreement_ids: [] | null,
    fields: [],
    followup_ids: [],
    brand_id: number | null,
    allow_channelback: false| null,
    allow_attachments: true| null
}