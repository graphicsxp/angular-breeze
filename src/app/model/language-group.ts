import { EntityBase } from './entity-base';
import { LanguageGroupLanguage } from './language-group-language';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class LanguageGroup extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// </code>

    // Generated code. Do not place code below this line.
    id: string;
    version: number;
    createdBy: string;
    updatedBy: string;
    creationDate: Date;
    updateDate: Date;
    isDeleted: boolean;
    name: string;
    description: string;
    holgId: number;
    holgName: string;
    languages: LanguageGroupLanguage[];
}

