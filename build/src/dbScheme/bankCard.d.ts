/**
 * Information about user's card
 */
export interface BankCard {
    /**
     * Card id (uuid)
     */
    id: string;
    /**
     * First six numbers of the card PAN
     */
    firstSix: number;
    /**
     * Last four numbers of the card PAN
     */
    lastFour: number;
    /**
     * Card payment system: Visa, Mastercard, Maestro or "MIR"
     */
    type: string;
    /**
     * Card expiry date
     */
    cardExpDate: string;
    /**
     * Card token for one-click payment
     */
    token: string;
}
