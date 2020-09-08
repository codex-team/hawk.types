import {ObjectId} from "mongodb";
import {UserNotificationsDBScheme} from "../../index";

/**
 * Interface representing how user is stored in DB
 */
export interface UserDBScheme {
    /**
     * User's id
     */
    _id: ObjectId;

    /**
     * User's email
     */
    email?: string;

    /**
     * User's password
     */
    password?: string;

    /**
     * User's image url
     */
    image?: string;

    /**
     * User's name
     */
    name?: string;

    /**
     * User's GitHub profile id
     */
    githubId?: string;

    /**
     * User's original password (this field appears only after registration).
     * Using to send password to user after registration
     */
    generatedPassword?: string;

    /**
     * User notifications settings
     */
    notifications?: UserNotificationsDBScheme;
}
